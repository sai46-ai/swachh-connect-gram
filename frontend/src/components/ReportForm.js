import React, { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaImage, FaCamera } from 'react-icons/fa';
import { createReport } from '../services/reportService';
import { useTranslation } from '../hooks/useTranslation';
import './ReportForm.css';

const ReportForm = ({ onSuccess }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    category: 'overflowing_drain',
    location: {
      coordinates: {
        latitude: null,
        longitude: null
      }
    },
    priority: 'medium'
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gettingLocation, setGettingLocation] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState(null);
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const getCategoryLabel = (value) => {
    return t(`report.categories.${value}`);
  };

  const getPriorityLabel = (value) => {
    return t(`report.priorities.${value}`);
  };

  const categories = [
    { value: 'overflowing_drain', label: () => getCategoryLabel('overflowing_drain') },
    { value: 'garbage_pile', label: () => getCategoryLabel('garbage_pile') },
    { value: 'blocked_toilet', label: () => getCategoryLabel('blocked_toilet') },
    { value: 'broken_pipe', label: () => getCategoryLabel('broken_pipe') },
    { value: 'street_waste', label: () => getCategoryLabel('street_waste') },
    { value: 'other', label: () => getCategoryLabel('other') }
  ];

  const priorities = [
    { value: 'low', label: () => getPriorityLabel('low') },
    { value: 'medium', label: () => getPriorityLabel('medium') },
    { value: 'high', label: () => getPriorityLabel('high') }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const keys = name.split('.');
      setFormData(prev => {
        const updated = { ...prev };
        let current = updated;
        for (let i = 0; i < keys.length - 1; i++) {
          current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        return updated;
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const getLocation = () => {
    setGettingLocation(true);
    setMessage({ type: 'info', text: t('report.gettingLocation') });
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          
          setFormData(prev => ({
            ...prev,
            location: {
              coordinates: {
                latitude,
                longitude
              }
            }
          }));

          setMessage({ type: 'success', text: t('report.locationCaptured') });
          setGettingLocation(false);
          setTimeout(() => setMessage({ type: '', text: '' }), 3000);
        },
        (error) => {
          console.error('Error getting location:', error);
          setGettingLocation(false);
          setMessage({ type: 'error', text: t('report.locationError') });
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      setGettingLocation(false);
      setMessage({ type: 'error', text: t('report.geolocationNotSupported') });
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' }, // Use back camera on mobile
        audio: false 
      });
      setStream(mediaStream);
      setShowCamera(true);
      
      // Wait for video element to be available
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      }, 100);
    } catch (error) {
      console.error('Error accessing camera:', error);
      setMessage({ type: 'error', text: t('report.cameraError') });
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      canvas.toBlob((blob) => {
        const file = new File([blob], `photo_${Date.now()}.jpg`, { type: 'image/jpeg' });
        setImages(prev => [...prev, file]);
        setMessage({ type: 'success', text: t('report.photoCaptured') });
        setTimeout(() => setMessage({ type: '', text: '' }), 2000);
        stopCamera();
      }, 'image/jpeg', 0.95);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.location.coordinates.latitude || !formData.location.coordinates.longitude) {
      setMessage({ type: 'error', text: t('report.locationRequired') });
      return;
    }

    if (images.length === 0) {
      setMessage({ type: 'error', text: t('report.imageRequired') });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const submitData = new FormData();
      
      // Append form fields
      submitData.append('category', formData.category);
      submitData.append('priority', formData.priority);
      
      // Send location as JSON string
      submitData.append('location', JSON.stringify({
        coordinates: {
          latitude: formData.location.coordinates.latitude,
          longitude: formData.location.coordinates.longitude
        }
      }));
      
      // Append images
      images.forEach((image) => {
        submitData.append('images', image);
      });

      console.log('Submitting form data:', {
        category: formData.category,
        priority: formData.priority,
        location: formData.location,
        imageCount: images.length
      });

      const response = await createReport(submitData);
      
      setMessage({ type: 'success', text: t('report.submitSuccess') });
      
      // Reset form
      setFormData({
        category: 'overflowing_drain',
        location: {
          coordinates: {
            latitude: null,
            longitude: null
          }
        },
        priority: 'medium'
      });
      setImages([]);
      
      if (onSuccess) onSuccess(response.data);
      
    } catch (error) {
      console.error('Error submitting complaint:', error);
      console.error('Error response:', error.response);
      
      let errorMessage = t('report.submitError');
      
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setMessage({ 
        type: 'error', 
        text: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="report-form-container">
      <form className="report-form" onSubmit={handleSubmit}>
        <h2>{t('report.title')}</h2>
        
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="form-group">
          <label>{t('report.categoryLabel')} *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label()}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>{t('report.priorityLabel')} *</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            required
          >
            {priorities.map(pri => (
              <option key={pri.value} value={pri.value}>{pri.label()}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>{t('report.locationLabel')} *</label>
          <button 
            type="button" 
            className="location-btn"
            onClick={getLocation}
            disabled={gettingLocation}
          >
            <FaMapMarkerAlt /> {gettingLocation ? t('report.capturingLocation') : t('report.captureLocationBtn')}
          </button>
          {formData.location.coordinates.latitude && (
            <p className="coordinates-display">
              ✅ {t('report.locationCaptured')}: {t('report.lat')} {formData.location.coordinates.latitude.toFixed(6)}, 
              {t('report.lng')} {formData.location.coordinates.longitude.toFixed(6)}
            </p>
          )}
        </div>

        <div className="form-group">
          <label>{t('report.imageLabel')} *</label>
          
          {!showCamera ? (
            <div className="image-options">
              <button 
                type="button" 
                className="camera-btn"
                onClick={startCamera}
              >
                <FaCamera /> {t('report.takePhoto')}
              </button>
              <button 
                type="button" 
                className="upload-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                <FaImage /> {t('report.chooseFromGallery')}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="file-input"
                style={{ display: 'none' }}
                required={images.length === 0}
              />
            </div>
          ) : (
            <div className="camera-container">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline
                className="camera-video"
              />
              <canvas ref={canvasRef} style={{ display: 'none' }} />
              <div className="camera-controls">
                <button 
                  type="button" 
                  className="capture-btn"
                  onClick={capturePhoto}
                >
                  <FaCamera /> {t('report.capture')}
                </button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={stopCamera}
                >
                  {t('report.cancel')}
                </button>
              </div>
            </div>
          )}
          
          {images.length > 0 && (
            <div className="image-preview">
              <p className="file-info">
                <FaImage /> {images.length} {t('report.imagesSelected')}
              </p>
              <div className="preview-grid">
                {images.map((img, index) => (
                  <div key={index} className="preview-item">
                    <img 
                      src={URL.createObjectURL(img)} 
                      alt={`${t('report.preview')} ${index + 1}`}
                      className="preview-image"
                    />
                    <button
                      type="button"
                      className="remove-image"
                      onClick={() => setImages(images.filter((_, i) => i !== index))}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? t('report.submitting') : t('report.submitButton')}
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
