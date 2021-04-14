export const normalizePosts = function (items) {
  return items.map(function (item) {
    return {
      objectID: item.objectID,
      title: item.title || item.story_title,
      author: item.author,
      url: item.story_url || item.url,
      creationDate: item.created_at,
      unwanted: false,
    };
  });
};
