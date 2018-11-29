const APIUtil = {
  followUser: id => {
    
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'JSON'
    });
  },

  unfollowUser: id => (
    $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'JSON'
    })
  ),
  
  searchUsers: (queryVal, success) => {
    return $.ajax({
      url: `/users/search`,
      dataType: 'JSON',
      data: {
        query: queryVal
      }
    });
  }
};

module.exports = APIUtil;