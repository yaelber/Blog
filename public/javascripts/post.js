function deleteComment(id) { 
    $.ajax({
      url: encodeURI('../comments/' + id),
      type: 'DELETE',
      success: function commentDeleted() {
        alert('The comment was deleted successfully!');
      },
      error: function commentNotDeleted() {
        alert('The comment is still here!');
      }
    });
  };

