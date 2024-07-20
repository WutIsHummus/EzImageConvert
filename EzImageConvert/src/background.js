import { convertToGif, convertToPng, convertToJpeg, convertToWebp, convertToAvif } from "./handler.mjs";

function extractBase64(dataUrl) {
  const parts = dataUrl.split(',');
  if (parts.length > 1) {
    return parts[1];
  }
  return '';
}
chrome.contextMenus.onClicked.addListener(function (info) {
  let base64 = extractBase64(info.srcUrl);
  switch (info.menuItemId) {
    case 'png':
      convertToPng(base64);
      break;
    case 'jpeg':
      convertToJpeg(base64);
      break;
    case 'gif':
      convertToGif(base64);
      break;
    case 'webp':
      convertToWebp(base64);
      break;
    case 'avif':
      convertToAvif(base64);
      break;
    default:
      console.log('Unknown format');
  }
});

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'EzImageConvert Settings',
    id: 'settings'
  })

  let parent = chrome.contextMenus.create({
    title: 'Download as: ',
    contexts: ['image'],
    id: 'convert'
  });

  chrome.contextMenus.create({
    title: '.png',
    parentId: parent,
    contexts: ['image'],
    id: 'png'
  });
  chrome.contextMenus.create({
    title: '.avif',
    parentId: parent,
    contexts: ['image'],
    id: 'avif'
  });
  chrome.contextMenus.create({
    title: '.jpeg',
    parentId: parent,
    contexts: ['image'],
    id: 'jpeg'
  });
  chrome.contextMenus.create({
    title: '.gif',
    parentId: parent,
    contexts: ['image'],
    id: 'gif'
  });
  chrome.contextMenus.create({
    title: '.webp',
    parentId: parent,
    contexts: ['image'],
    id: 'webp'
  });
});