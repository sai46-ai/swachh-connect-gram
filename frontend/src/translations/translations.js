export const translations = {
  en: {
    // Navbar
    navbar: {
      home: "Home",
      report: "Report Issue",
      awareness: "Hygiene Awareness",
      dashboard: "Dashboard",
      login: "Login",
      register: "Register",
      logout: "Logout",
      admin: "Admin Dashboard",
      resident: "My Dashboard"
    },

    // Home Page
    home: {
      title: "Swachh Connect Gram",
      subtitle: "Building Cleaner, Healthier Villages Together",
      description: "Report sanitation issues in your village and track their resolution. Together, we can create a cleaner, healthier environment for everyone.",
      reportButton: "Report an Issue",
      learnMore: "Learn More",
      
      // Features Section
      featuresTitle: "Why Choose Swachh Connect Gram?",
      feature1Title: "Easy Reporting",
      feature1Desc: "Report sanitation issues with just a few clicks using our simple form",
      feature2Title: "Real-time Tracking",
      feature2Desc: "Track the status of your complaints and get updates",
      feature3Title: "Community Driven",
      feature3Desc: "Work together with your community for a cleaner village",
      feature4Title: "Admin Dashboard",
      feature4Desc: "Efficient management and resolution of issues",
      
      // Stats Section
      statsTitle: "Our Impact",
      stat1: "Active Users",
      stat2: "Issues Resolved",
      stat3: "Villages Covered",
      stat4: "Success Rate",
      
      // CTA Section
      ctaTitle: "Ready to Make a Difference?",
      ctaDesc: "Join thousands of residents working towards cleaner villages",
      getStarted: "Get Started",
      
      // Footer
      footerText: "Building a cleaner future, one village at a time"
    },

    // Report Page
    report: {
      title: "Report a Community Cleanliness Issue",
      subtitle: "Help keep our village clean - Report public sanitation problems",
      
      // Form Fields
      categoryLabel: "Type of Community Problem",
      categoryPlaceholder: "Select problem type",
      
      priorityLabel: "How Urgent?",
      priorityPlaceholder: "Select urgency level",
      
      photoLabel: "Take Photos of the Problem",
      photoHelper: "Capture or upload photos showing the issue",
      capturePhoto: "Capture Photo",
      uploadPhoto: "Upload Photos",
      photosSelected: "photos selected",
      
      locationLabel: "Location",
      locationHelper: "Click to get your current location",
      getLocation: "Get My Location",
      locationCaptured: "Location captured",
      
      submitButton: "Submit Report",
      submitting: "Submitting...",
      
      // Success/Error Messages
      successTitle: "Report Submitted Successfully!",
      successMessage: "Your complaint has been registered. You can track its status in your dashboard.",
      errorTitle: "Submission Failed",
      errorMessage: "Please try again or contact support if the problem persists.",
      
      // Categories
      categories: {
        overflowing_drain: "Open Drain Overflowing",
        blocked_toilet: "Public Toilet Blocked",
        garbage_pile: "Garbage Not Collected from Street",
        broken_pipe: "Community Water Pipe Broken",
        street_waste: "Street/Road Littered with Waste",
        other: "Other Cleanliness Issue"
      },
      
      // Priorities
      priorities: {
        high: "Very Urgent",
        medium: "Somewhat Urgent",
        low: "Can Wait"
      }
    },

    // Login Page
    login: {
      title: "Login",
      subtitle: "Welcome back! Please login to your account",
      emailLabel: "Email Address",
      emailPlaceholder: "Enter your email",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter your password",
      loginButton: "Login",
      loggingIn: "Logging in...",
      noAccount: "Don't have an account?",
      registerLink: "Register here",
      error: "Invalid credentials. Please try again."
    },

    // Register Page
    register: {
      title: "Register",
      subtitle: "Create your account to get started",
      selectAccountType: "Select Account Type",
      residentTitle: "Resident",
      residentDesc: "Report cleanliness issues and track your submissions",
      residentFeature1: "✓ Submit complaints",
      residentFeature2: "✓ Track report status",
      residentFeature3: "✓ View awareness content",
      residentFeature4: "✓ Personal dashboard",
      residentButton: "Register as Resident",
      adminTitle: "Administrator",
      adminDesc: "Manage complaints and oversee community cleanliness",
      adminFeature1: "✓ View all complaints",
      adminFeature2: "✓ Update complaint status",
      adminFeature3: "✓ Manage reports",
      adminFeature4: "✓ Full admin dashboard",
      adminButton: "Register as Admin",
      backToSelection: "← Back to selection",
      registeringAs: "Registering as",
      resident: "Resident",
      administrator: "Administrator",
      locationLabel: "Location/City",
      locationPlaceholder: "Enter your village/town/city",
      addressLabel: "Full Address",
      addressPlaceholder: "Enter your complete address",
      adminCodeLabel: "Admin Registration Code",
      adminCodePlaceholder: "Enter admin code",
      adminCodeHint: "Contact administrator for the registration code",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "Enter your email",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      passwordLabel: "Password",
      passwordPlaceholder: "Create a password",
      confirmPasswordLabel: "Confirm Password",
      confirmPasswordPlaceholder: "Re-enter your password",
      registerButton: "Register",
      registering: "Registering...",
      haveAccount: "Already have an account?",
      loginLink: "Login here",
      passwordMismatch: "Passwords do not match",
      success: "Registration successful! Please login.",
      selectUserType: "Please select a user type",
      adminCodeRequired: "Admin code is required for admin registration",
      registrationFailed: "Registration failed"
    },

    // Admin Dashboard
    admin: {
      title: "Admin Dashboard",
      welcome: "Welcome",
      
      // Tabs
      overview: "Overview",
      allComplaints: "All Complaints",
      analytics: "Analytics",
      
      // Stats Cards
      totalComplaints: "Total Complaints",
      pendingComplaints: "Pending",
      inProgressComplaints: "In Progress",
      resolvedComplaints: "Resolved",
      highPriority: "High Priority",
      lastSevenDays: "Last 7 Days",
      
      // Filters
      searchPlaceholder: "Search by address or details...",
      filterByStatus: "Filter by Status",
      filterByCategory: "Filter by Category",
      filterByPriority: "Filter by Priority",
      allStatuses: "All Statuses",
      allCategories: "All Categories",
      allPriorities: "All Priorities",
      clearFilters: "Clear Filters",
      showingResults: "Showing Results",
      
      // Table Headers
      photo: "Photo",
      category: "Category",
      priority: "Priority",
      location: "Location",
      status: "Status",
      date: "Date",
      actions: "Actions",
      
      // Status Options
      pending: "Pending",
      inProgress: "In Progress",
      resolved: "Resolved",
      rejected: "Rejected",
      
      // Actions
      viewDetails: "View Details",
      updateStatus: "Update Status",
      
      // Recent Activity
      recentActivity: "Recent Activity",
      noActivity: "No recent activity",
      
      // Analytics
      complaintsByCategory: "Complaints by Category",
      complaintsByPriority: "Complaints by Priority",
      complaintsByStatus: "Complaints by Status",
      resolutionRate: "Resolution Rate",
      avgResponseTime: "Avg Response Time",
      activeComplaints: "Active Complaints",
      days: "days",
      
      // Modal
      complaintDetails: "Complaint Details",
      reportedBy: "Reported By",
      name: "Name",
      contact: "Contact",
      address: "Address",
      coordinates: "Coordinates",
      description: "Description",
      images: "Images",
      reportDate: "Report Date",
      lastUpdated: "Last Updated",
      resolvedDate: "Resolved Date",
      close: "Close",
      
      // Messages
      updateSuccess: "Status updated successfully",
      updateError: "Failed to update status",
      newComplaint: "New complaint received!",
      noComplaints: "No complaints found"
    },

    // Resident Dashboard
    resident: {
      title: "My Dashboard",
      welcome: "Welcome",
      myComplaints: "My Complaints",
      
      // Stats
      total: "Total Reports",
      pending: "Pending",
      resolved: "Resolved",
      
      // Table
      issue: "Issue",
      priority: "Priority",
      status: "Status",
      date: "Submitted",
      actions: "Actions",
      
      // Messages
      noComplaints: "You haven't submitted any complaints yet",
      reportNow: "Report an Issue",
      viewDetails: "View Details"
    },

    // Hygiene Awareness
    awareness: {
      title: "Hygiene Awareness",
      subtitle: "Learn about hygiene and sanitation best practices",
      
      videoTitle: "Educational Videos",
      videoSubtitle: "Watch these informative videos to learn more about hygiene",
      
      tipsTitle: "Hygiene Tips",
      tip1: "Wash your hands regularly with soap",
      tip2: "Keep your surroundings clean",
      tip3: "Dispose of waste properly",
      tip4: "Maintain clean toilets",
      tip5: "Cover food to prevent contamination",
      tip6: "Use clean drinking water",
      
      importance: "Why Hygiene Matters",
      importanceText: "Good hygiene practices are essential for preventing diseases and maintaining a healthy community. By following simple hygiene rules, we can significantly reduce the spread of infections and improve the quality of life in our villages."
    },

    // Common
    common: {
      loading: "Loading...",
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      confirm: "Confirm",
      yes: "Yes",
      no: "No",
      search: "Search",
      filter: "Filter",
      all: "All",
      none: "None",
      select: "Select",
      upload: "Upload",
      download: "Download",
      view: "View",
      close: "Close",
      back: "Back",
      next: "Next",
      previous: "Previous",
      error: "Error",
      success: "Success",
      warning: "Warning",
      info: "Information"
    }
  },

  te: {
    // Navbar
    navbar: {
      home: "హోమ్",
      report: "సమస్య నివేదించండి",
      awareness: "పరిశుభ్రత అవగాహన",
      dashboard: "డాష్‌బోర్డ్",
      login: "లాగిన్",
      register: "నమోదు",
      logout: "లాగౌట్",
      admin: "అడ్మిన్ డాష్‌బోర్డ్",
      resident: "నా డాష్‌బోర్డ్"
    },

    // Home Page
    home: {
      title: "స్వచ్ఛ కనెక్ట్ గ్రామ్",
      subtitle: "కలిసి శుభ్రమైన, ఆరోగ్యకరమైన గ్రామాలను నిర్మిస్తాము",
      description: "మీ గ్రామంలో పరిశుభ్రత సమస్యలను నివేదించండి మరియు వాటి పరిష్కారాన్ని ట్రాక్ చేయండి. కలిసి, మనం అందరికీ శుభ్రమైన, ఆరోగ్యకరమైన వాతావరణాన్ని సృష్టించగలము.",
      reportButton: "సమస్య నివేదించండి",
      learnMore: "మరింత తెలుసుకోండి",
      
      // Features Section
      featuresTitle: "స్వచ్ఛ కనెక్ట్ గ్రామ్‌ను ఎందుకు ఎంచుకోవాలి?",
      feature1Title: "సులభ నివేదన",
      feature1Desc: "మా సరళమైన ఫారమ్‌ని ఉపయోగించి కేవలం కొన్ని క్లిక్‌లతో పరిశుభ్రత సమస్యలను నివేదించండి",
      feature2Title: "రియల్-టైమ్ ట్రాకింగ్",
      feature2Desc: "మీ ఫిర్యాదుల స్థితిని ట్రాక్ చేయండి మరియు అప్‌డేట్‌లను పొందండి",
      feature3Title: "కమ్యూనిటీ ఆధారిత",
      feature3Desc: "శుభ్రమైన గ్రామం కోసం మీ సంఘంతో కలిసి పనిచేయండి",
      feature4Title: "అడ్మిన్ డాష్‌బోర్డ్",
      feature4Desc: "సమస్యల సమర్థవంతమైన నిర్వహణ మరియు పరిష్కారం",
      
      // Stats Section
      statsTitle: "మా ప్రభావం",
      stat1: "క్రియాశీల వినియోగదారులు",
      stat2: "పరిష్కరించబడిన సమస్యలు",
      stat3: "కవర్ చేయబడిన గ్రామాలు",
      stat4: "విజయ రేటు",
      
      // CTA Section
      ctaTitle: "మార్పు తీసుకురావడానికి సిద్ధంగా ఉన్నారా?",
      ctaDesc: "శుభ్రమైన గ్రామాల కోసం పనిచేస్తున్న వేలాది నివాసితులతో చేరండి",
      getStarted: "ప్రారంభించండి",
      
      // Footer
      footerText: "ఒక్కొక్క గ్రామం చొప్పున శుభ్రమైన భవిష్యత్తును నిర్మిస్తున్నాము"
    },

    // Report Page
    report: {
      title: "కమ్యూనిటీ పరిశుభ్రత సమస్యను నివేదించండి",
      subtitle: "మా గ్రామాన్ని శుభ్రంగా ఉంచండి - ప్రజా పరిశుభ్రత సమస్యలను నివేదించండి",
      
      // Form Fields
      categoryLabel: "కమ్యూనిటీ సమస్య రకం",
      categoryPlaceholder: "సమస్య రకాన్ని ఎంచుకోండి",
      
      priorityLabel: "ఎంత అత్యవసరం?",
      priorityPlaceholder: "అత్యవసర స్థాయిని ఎంచుకోండి",
      
      photoLabel: "సమస్య యొక్క ఫోటోలు తీయండి",
      photoHelper: "సమస్యను చూపించే ఫోటోలను క్యాప్చర్ లేదా అప్‌లోడ్ చేయండి",
      capturePhoto: "ఫోటో క్యాప్చర్ చేయండి",
      uploadPhoto: "ఫోటోలను అప్‌లోడ్ చేయండి",
      photosSelected: "ఫోటోలు ఎంచుకోబడ్డాయి",
      
      locationLabel: "స్థానం",
      locationHelper: "మీ ప్రస్తుత స్థానాన్ని పొందడానికి క్లిక్ చేయండి",
      getLocation: "నా స్థానాన్ని పొందండి",
      locationCaptured: "స్థానం క్యాప్చర్ చేయబడింది",
      
      submitButton: "నివేదికను సమర్పించండి",
      submitting: "సమర్పిస్తోంది...",
      
      // Success/Error Messages
      successTitle: "నివేదిక విజయవంతంగా సమర్పించబడింది!",
      successMessage: "మీ ఫిర్యాదు నమోదు చేయబడింది. మీరు మీ డాష్‌బోర్డ్‌లో దాని స్థితిని ట్రాక్ చేయవచ్చు.",
      errorTitle: "సమర్పణ విफలమైంది",
      errorMessage: "దయచేసి మళ్లీ ప్రయత్నించండి లేదా సమస్య కొనసాగితే సపోర్ట్‌ను సంప్రదించండి.",
      
      // Categories
      categories: {
        overflowing_drain: "బహిరంగ కాలువ పొంగిపోతోంది",
        blocked_toilet: "ప్రజా టాయిలెట్ మూసుకుపోయింది",
        garbage_pile: "వీధిలో చెత్త సేకరించబడలేదు",
        broken_pipe: "కమ్యూనిటీ నీటి పైపు విరిగింది",
        street_waste: "వీధి/రోడ్డుపై చెత్త పడి ఉంది",
        other: "ఇతర పరిశుభ్రత సమస్య"
      },
      
      // Priorities
      priorities: {
        high: "చాలా అత్యవసరం",
        medium: "కొంత అత్యవసరం",
        low: "వేచి ఉండవచ్చు"
      }
    },

    // Login Page
    login: {
      title: "లాగిన్",
      subtitle: "మళ్లీ స్వాగతం! దయచేసి మీ ఖాతాలోకి లాగిన్ అవ్వండి",
      emailLabel: "ఇమెయిల్ చిరునామా",
      emailPlaceholder: "మీ ఇమెయిల్‌ను నమోదు చేయండి",
      passwordLabel: "పాస్‌వర్డ్",
      passwordPlaceholder: "మీ పాస్‌వర్డ్‌ను నమోదు చేయండి",
      loginButton: "లాగిన్",
      loggingIn: "లాగిన్ అవుతోంది...",
      noAccount: "ఖాతా లేదా?",
      registerLink: "ఇక్కడ నమోదు చేసుకోండి",
      error: "చెల్లని ఆధారాలు. దయచేసి మళ్లీ ప్రయత్నించండి."
    },

    // Register Page
    register: {
      title: "నమోదు",
      subtitle: "ప్రారంభించడానికి మీ ఖాతాను సృష్టించండి",
      selectAccountType: "ఖాతా రకాన్ని ఎంచుకోండి",
      residentTitle: "నివాసి",
      residentDesc: "పరిశుభ్రత సమస్యలను నివేదించండి మరియు మీ సమర్పణలను ట్రాక్ చేయండి",
      residentFeature1: "✓ ఫిర్యాదులు సమర్పించండి",
      residentFeature2: "✓ నివేదిక స్థితిని ట్రాక్ చేయండి",
      residentFeature3: "✓ అవగాహన కంటెంట్‌ను చూడండి",
      residentFeature4: "✓ వ్యక్తిగత డాష్‌బోర్డ్",
      residentButton: "నివాసిగా నమోదు చేసుకోండి",
      adminTitle: "నిర్వాహకుడు",
      adminDesc: "ఫిర్యాదులను నిర్వహించండి మరియు సంఘ పరిశుభ్రతను పర్యవేక్షించండి",
      adminFeature1: "✓ అన్ని ఫిర్యాదులను చూడండి",
      adminFeature2: "✓ ఫిర్యాదు స్థితిని నవీకరించండి",
      adminFeature3: "✓ నివేదికలను నిర్వహించండి",
      adminFeature4: "✓ పూర్తి అడ్మిన్ డాష్‌బోర్డ్",
      adminButton: "అడ్మిన్‌గా నమోదు చేసుకోండి",
      backToSelection: "← ఎంపికకు తిరిగి వెళ్ళండి",
      registeringAs: "నమోదు చేస్తున్నారు",
      resident: "నివాసి",
      administrator: "నిర్వాహకుడు",
      locationLabel: "స్థానం/నగరం",
      locationPlaceholder: "మీ గ్రామం/పట్టణం/నగరం నమోదు చేయండి",
      addressLabel: "పూర్తి చిరునామా",
      addressPlaceholder: "మీ పూర్తి చిరునామా నమోదు చేయండి",
      adminCodeLabel: "అడ్మిన్ నమోదు కోడ్",
      adminCodePlaceholder: "అడ్మిన్ కోడ్ నమోదు చేయండి",
      adminCodeHint: "నమోదు కోడ్ కోసం నిర్వాహకుడిని సంప్రదించండి",
      nameLabel: "పూర్తి పేరు",
      namePlaceholder: "మీ పూర్తి పేరును నమోదు చేయండి",
      emailLabel: "ఇమెయిల్ చిరునామా",
      emailPlaceholder: "మీ ఇమెయిల్‌ను నమోదు చేయండి",
      phoneLabel: "ఫోన్ నంబర్",
      phonePlaceholder: "మీ ఫోన్ నంబర్‌ను నమోదు చేయండి",
      passwordLabel: "పాస్‌వర్డ్",
      passwordPlaceholder: "పాస్‌వర్డ్‌ను సృష్టించండి",
      confirmPasswordLabel: "పాస్‌వర్డ్‌ను నిర్ధారించండి",
      confirmPasswordPlaceholder: "పాస్‌వర్డ్‌ను మళ్లీ నమోదు చేయండి",
      registerButton: "నమోదు",
      registering: "నమోదు చేస్తోంది...",
      haveAccount: "ఇప్పటికే ఖాతా ఉందా?",
      loginLink: "ఇక్కడ లాగిన్ అవ్వండి",
      passwordMismatch: "పాస్‌వర్డ్‌లు సరిపోలడం లేదు",
      success: "నమోదు విజయవంతమైంది! దయచేసి లాగిన్ అవ్వండి.",
      selectUserType: "దయచేసి వినియోగదారు రకాన్ని ఎంచుకోండి",
      adminCodeRequired: "అడ్మిన్ నమోదు కోసం అడ్మిన్ కోడ్ అవసరం",
      registrationFailed: "నమోదు విఫలమైంది"
    },

    // Admin Dashboard
    admin: {
      title: "అడ్మిన్ డాష్‌బోర్డ్",
      welcome: "స్వాగతం",
      
      // Tabs
      overview: "సారాంశం",
      allComplaints: "అన్ని ఫిర్యాదులు",
      analytics: "విశ్లేషణలు",
      
      // Stats Cards
      totalComplaints: "మొత్తం ఫిర్యాదులు",
      pendingComplaints: "పెండింగ్",
      inProgressComplaints: "పురోగతిలో ఉంది",
      resolvedComplaints: "పరిష్కరించబడింది",
      highPriority: "అధిక ప్రాధాన్యత",
      lastSevenDays: "గత 7 రోజులు",
      
      // Filters
      searchPlaceholder: "చిరునామా లేదా వివరాల ద్వారా శోధించండి...",
      filterByStatus: "స్థితి ద్వారా ఫిల్టర్ చేయండి",
      filterByCategory: "వర్గం ద్వారా ఫిల్టర్ చేయండి",
      filterByPriority: "ప్రాధాన్యత ద్వారా ఫిల్టర్ చేయండి",
      allStatuses: "అన్ని స్థితులు",
      allCategories: "అన్ని వర్గాలు",
      allPriorities: "అన్ని ప్రాధాన్యతలు",
      clearFilters: "ఫిల్టర్‌లను క్లియర్ చేయండి",
      showingResults: "ఫలితాలను చూపుతోంది",
      
      // Table Headers
      photo: "ఫోటో",
      category: "వర్గం",
      priority: "ప్రాధాన్యత",
      location: "స్థానం",
      status: "స్థితి",
      date: "తేదీ",
      actions: "చర్యలు",
      
      // Status Options
      pending: "పెండింగ్",
      inProgress: "పురోగతిలో ఉంది",
      resolved: "పరిష్కరించబడింది",
      rejected: "తిరస్కరించబడింది",
      
      // Actions
      viewDetails: "వివరాలను చూడండి",
      updateStatus: "స్థితిని నవీకరించండి",
      
      // Recent Activity
      recentActivity: "ఇటీవలి కార్యాచరణ",
      noActivity: "ఇటీవలి కార్యాచరణ లేదు",
      
      // Analytics
      complaintsByCategory: "వర్గం వారీగా ఫిర్యాదులు",
      complaintsByPriority: "ప్రాధాన్యత వారీగా ఫిర్యాదులు",
      complaintsByStatus: "స్థితి వారీగా ఫిర్యాదులు",
      resolutionRate: "పరిష్కార రేటు",
      avgResponseTime: "సగటు ప్రతిస్పందన సమయం",
      activeComplaints: "క్రియాశీల ఫిర్యాదులు",
      days: "రోజులు",
      
      // Modal
      complaintDetails: "ఫిర్యాదు వివరాలు",
      reportedBy: "నివేదించినవారు",
      name: "పేరు",
      contact: "సంప్రదింపు",
      address: "చిరునామా",
      coordinates: "కోఆర్డినేట్స్",
      description: "వివరణ",
      images: "చిత్రాలు",
      reportDate: "నివేదిక తేదీ",
      lastUpdated: "చివరిగా నవీకరించబడింది",
      resolvedDate: "పరిష్కరించిన తేదీ",
      close: "మూసివేయి",
      
      // Messages
      updateSuccess: "స్థితి విజయవంతంగా నవీకరించబడింది",
      updateError: "స్థితిని నవీకరించడంలో విఫలమైంది",
      newComplaint: "కొత్త ఫిర్యాదు అందుకుంది!",
      noComplaints: "ఫిర్యాదులు కనుగొనబడలేదు"
    },

    // Resident Dashboard
    resident: {
      title: "నా డాష్‌బోర్డ్",
      welcome: "స్వాగతం",
      myComplaints: "నా ఫిర్యాదులు",
      
      // Stats
      total: "మొత్తం నివేదికలు",
      pending: "పెండింగ్",
      resolved: "పరిష్కరించబడింది",
      
      // Table
      issue: "సమస్య",
      priority: "ప్రాధాన్యత",
      status: "స్థితి",
      date: "సమర్పించబడింది",
      actions: "చర్యలు",
      
      // Messages
      noComplaints: "మీరు ఇంకా ఎటువంటి ఫిర్యాదులను సమర్పించలేదు",
      reportNow: "సమస్యను నివేదించండి",
      viewDetails: "వివరాలను చూడండి"
    },

    // Hygiene Awareness
    awareness: {
      title: "పరిశుభ్రత అవగాహన",
      subtitle: "పరిశుభ్రత మరియు పారిశుద్ధ్య ఉత్తమ పద్ధతుల గురించి తెలుసుకోండి",
      
      videoTitle: "విద్యా వీడియోలు",
      videoSubtitle: "పరిశుభ్రత గురించి మరింత తెలుసుకోవడానికి ఈ సమాచార వీడియోలను చూడండి",
      
      tipsTitle: "పరిశుభ్రత చిట్కాలు",
      tip1: "సబ్బుతో మీ చేతులను క్రమం తప్పకుండా కడుక్కోండి",
      tip2: "మీ పరిసరాలను శుభ్రంగా ఉంచండి",
      tip3: "వ్యర్థాలను సరిగ్గా పారవేయండి",
      tip4: "టాయిలెట్లను శుభ్రంగా నిర్వహించండి",
      tip5: "కాలుష్యం నివారించడానికి ఆహారాన్ని కవర్ చేయండి",
      tip6: "శుభ్రమైన తాగునీటిని ఉపయోగించండి",
      
      importance: "పరిశుభ్రత ఎందుకు ముఖ్యం",
      importanceText: "వ్యాధులను నివారించడానికి మరియు ఆరోగ్యకరమైన సంఘాన్ని నిర్వహించడానికి మంచి పరిశుభ్రత పద్ధతులు అవసరం. సాధారణ పరిశుభ్రత నియమాలను పాటించడం ద్వారా, మనం ఇన్ఫెక్షన్ల వ్యాప్తిని గణనీయంగా తగ్గించవచ్చు మరియు మన గ్రామాలలో జీవన నాణ్యతను మెరుగుపరచవచ్చు."
    },

    // Common
    common: {
      loading: "లోడ్ అవుతోంది...",
      submit: "సమర్పించు",
      cancel: "రద్దు చేయి",
      save: "సేవ్ చేయి",
      edit: "సవరించు",
      delete: "తొలగించు",
      confirm: "నిర్ధారించు",
      yes: "అవును",
      no: "కాదు",
      search: "శోధించు",
      filter: "ఫిల్టర్",
      all: "అన్నీ",
      none: "ఏదీ లేదు",
      select: "ఎంచుకోండి",
      upload: "అప్‌లోడ్",
      download: "డౌన్‌లోడ్",
      view: "చూడండి",
      close: "మూసివేయి",
      back: "వెనుకకు",
      next: "తదుపరి",
      previous: "మునుపటి",
      error: "లోపం",
      success: "విజయం",
      warning: "హెచ్చరిక",
      info: "సమాచారం"
    }
  }
};

// Helper function to get translation
export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return value || key;
};
