interface LastChartOptions {
  char?: string;
  offset?: { x: number; y: number };
  textElement?: any;
  textContainer?: any;
}

const defaults: LastChartOptions = {
  char: '.',
  offset: { x: 0, y: -10 },
  textElement: document.body,
  textContainer: document.body,
};

function getLastTextNode(node: any) {
  if (node.nodeType === Node.TEXT_NODE) return node;
  for (let i = node.childNodes.length - 1; i >= 0; i--) {
    let result = getLastTextNode(node.childNodes[i]);
    if (result) {
      return result;
    }
  }
  return null;
}

function getLastChar(inOptions: LastChartOptions) {
  const options = { ...defaults, ...inOptions };
  const textElement = options.textElement;
  const textContainer = options.textContainer;
  const offset = options.offset!;

  // Get last text node
  let lastTextNode = getLastTextNode(textElement);
  // Create a temp text node
  let tempText = document.createTextNode(options.char!);
  if (lastTextNode) {
    lastTextNode.parentNode.appendChild(tempText);
  } else {
    textElement.appendChild(tempText);
  }

  // Select the temp text node
  const range = document.createRange();
  range.setStart(tempText, 0);
  range.setEnd(tempText, 0);

  // This is the position of the last character
  const rect = range.getBoundingClientRect();
  const textRect = textContainer.getBoundingClientRect();

  const x = rect.left - textRect.left + offset.x;
  const y = rect.top - textRect.top + offset.y;

  tempText.remove();

  return { x, y };
}

export default getLastChar;
