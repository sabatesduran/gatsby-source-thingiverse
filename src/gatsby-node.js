const crypto = require('crypto')
const fetch = require('node-fetch')

exports.sourceNodes = async (
  { boundActionCreators: { createNode }, createNodeId },
  { plugins, ...options }
) => {
  const apiUrl = `https://api.thingiverse.com/collections/${options.collectionId}/things/`
  const fetchOptions = {
    headers: {
      'Authorization': `Bearer ${options.apiKey}`,
    }
  }
  const response = await fetch(apiUrl, fetchOptions);
  const data = await response.json();

  data.forEach(thing => {
    createNode({
      ...thing,
      id: createNodeId(`thingiverse-thing-${thing.id}`),
      real_id: `thingiverse-thing-${thing.id}`,
      parent: null,
      children: [],
      internal: {
        type: 'ThingiverseThing',
        content: JSON.stringify(thing),
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(thing))
          .digest('hex')
      }
    });
  });
};
