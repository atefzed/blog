import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

// Define the type for translations (nested object or string)
type TranslationObject = { [key: string]: string | TranslationObject };

// Define available translations
const translations: Record<string, TranslationObject> = { en, fr };

// Function to retrieve a nested translation using dot notation
const getNestedTranslation = (obj: TranslationObject, path: string): string | undefined => {
  const result = path.split('.').reduce<TranslationObject | string | undefined>(
    (acc, part) => (typeof acc === "object" && acc ? acc[part] : undefined),
    obj
  );

  return typeof result === "string" ? result : undefined; // Ensure only strings are returned
};

// **Server-Side Translation Fetcher**
export const getTranslation = (locale: string, key: string, variables?: Record<string, string>) => {
  const translation = getNestedTranslation(translations[locale] || translations["en"], key) || key;

  if (variables) {
    return Object.entries(variables).reduce(
      (str, [varKey, varValue]) => str.replace(`{${varKey}}`, varValue),
      translation
    );
  }

  return translation;
};
