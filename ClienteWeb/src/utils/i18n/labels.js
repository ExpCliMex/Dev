import labels from './labels.json';

function getLabel({ labelId, language="es" }) {
  const labelsSection = labels[language];
  return labelsSection[labelId] || '';
}

export { getLabel };
