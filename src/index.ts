interface LastChartOptions {
  char?: string;
  offset?: number;
  textElement?: any;
  textContainer?: any;
}

const defaults: LastChartOptions = {
  char: '.',
  offset: -10,
  textElement: document.body,
  textContainer: document.body,
};

function getLastTextNode(node: any) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node;
  }
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

  // 获取最后一个文本元素
  let lastTextNode = getLastTextNode(textElement);
  // 创建一个临时的文本节点，以便选中最后一个文字
  let tempText = document.createTextNode(options.char!);
  if (lastTextNode) {
    lastTextNode.parentNode.appendChild(tempText);
  } else {
    textElement.appendChild(tempText);
  }

  // 选中最后一个文字
  const range = document.createRange();
  range.setStart(tempText, 0);
  range.setEnd(tempText, 0);

  // 这个文字是相对于浏览器
  const rect = range.getBoundingClientRect();
  const textRect = textContainer.getBoundingClientRect();

  const x = rect.left - textRect.left;
  const y = rect.top - textRect.top + offset;

  tempText.remove();

  return { x, y };
}

export default getLastChar;
