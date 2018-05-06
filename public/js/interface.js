// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#name").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".eat-burger").on("click", function(event) {
        var id = $(this).data("id");
        var newDevouredState = {
            devoured : true
        };

        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("Burger has been eaten");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
        
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("Burger has been deleted");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  
  });
  