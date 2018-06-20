# gatsby-source-thingiverse

This source plugin for Gatsby will make collection things from [Thingiverse](https://thingiverse.com/) available in GraphQL queries.

## Installation

```sh
# Install the plugin
yarn add gatsby-source-thingiverse
```

In `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-thingiverse",
      options: {
        apiKey: "YOUR_API_KEY_HERE",
        collectionId: "YOUR_COLLECTION_ID_HERE",
      }
    }
  ]
};
```

## Configuration Options

| Option           | Default   | Description                                                                                                                                                                                                                                                                |
| ---------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiKey`            |           | **[required]** Your Thingiverse API key                                                                                                                                                                                                                                        |
| `collectionId`              |           | **[required]** The collection id that you want to get |

## Querying thingiverse Images

Once the plugin is configured, two new queries are available in GraphQL: `allThingiverseThing` and `thingiverseThing`.

Here’s an example query to load all the things of the collection:

```gql
query ThingQuery {
  {
    allThingiverseThing {
      edges {
        node {
          id
          name
          thumbnail
          url
          public_url
          creator {
            id
            name
          }
          is_private
          is_purchased
          is_published
        }
      }
    }
  }
}
```

See the [Thingiverse API docs](https://www.thingiverse.com/developers/rest-api-reference) or the GraphiQL UI for info on all returned fields.
