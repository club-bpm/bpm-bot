const isValidUrl = (url) => {
  try {
    new URL(url);
  } catch (e) {
    return false;
  }
  return true;
};

const emojiNumbers = [
  '0️⃣',
  '1️⃣',
  '2️⃣',
  '3️⃣',
  '4️⃣',
  '5️⃣',
  '6️⃣',
  '7️⃣',
  '8️⃣',
  '9️⃣',
  '1️⃣0️⃣'
];

// Extract artist + song from urls
// YOLO reusing for sections that dont follow same artist/song pattern.
const getUrl = (link) => {
  const url = new URL(link);

  const p = url.pathname;

  const artist = p.substring(p.indexOf('/') + 1, p.lastIndexOf('/'));

  const removed = p.replace(artist, '');

  const song = p.replace(artist, '').substring(2, removed.length);

  return { artist, song };
};

const uuidV4Regex =
  /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i;

const isValidV4UUID = (uuid) => uuidV4Regex.test(uuid);

export { isValidUrl, getUrl, isValidV4UUID, emojiNumbers };