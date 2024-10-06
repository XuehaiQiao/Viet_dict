// Function to load JSON from a file or API
export async function loadJsonFile(filePath: string): Promise<any> {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`Failed to load JSON from ${filePath}`);
  }
  return await response.json();
}

// Function to store JSON to local storage
export function storeJsonToLocalStorage(key: string, data: any): void {
  const jsonData = JSON.stringify(data);
  localStorage.setItem(key, jsonData);
}

// Function to retrieve JSON from local storage
export function loadJsonFromLocalStorage(key: string): any {
  const jsonData = localStorage.getItem(key);
  return jsonData ? JSON.parse(jsonData) : null;
}

// Function to edit a JSON object
export function editJson(jsonObj: any, key: string, newValue: any): any {
  jsonObj[key] = newValue;
  return jsonObj;
}

// Function to store edited JSON back to local storage
export function storeEditedJson(key: string, editedJson: any): void {
  storeJsonToLocalStorage(key, editedJson);
}
