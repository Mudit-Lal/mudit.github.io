(function() {
  // Define images
  var getQuote, quotes, totalQuotes;

  quotes = ['There is no monument dedicated to the memory of a committee.', 'Wanting to be someone you\'re not is a waste of the person you are.', 'If you can find a path with no obstacles, it probably doesn\'t lead anywhere.', 'The great thing about a computer notebook is that no matter how much you stuff into it, it doesn\'t get bigger or heavier.', 'Mistakes are the portals of discovery.', 'Death is a friend of ours; and he that is not ready to entertain him is not at home.', 'Don\'t let yourself forget what it\'s like to be sixteen.'];

  // Counts total images
  totalQuotes = quotes.length;

  // Get Quote
  getQuote = function() {
    var activeQuotes;
    // Gets random image from array
    activeQuotes = quotes[Math.floor(Math.random() * totalQuotes)];
    // Changes background of div
    return $('quote').text(activeQuotes);
  };

  getQuote();

  $('button').on('click', function(e) {
    e.preventDefault();
    return getQuote();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUEsUUFBQSxFQUFBLE1BQUEsRUFBQTs7RUFDQSxNQUFBLEdBQVMsQ0FDUCw4REFETyxFQUVQLHFFQUZPLEVBR1AsK0VBSE8sRUFJUCw0SEFKTyxFQUtQLHdDQUxPLEVBTVAsc0ZBTk8sRUFPUCwyREFQTyxFQURUOzs7RUFZQSxXQUFBLEdBQWMsTUFBTSxDQUFDLE9BWnJCOzs7RUFlQSxRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7QUFFVCxRQUFBLFlBQUE7O0lBQUEsWUFBQSxHQUFlLE1BQU8sQ0FBQSxJQUFJLENBQUMsS0FBTCxDQUFZLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFnQixXQUE1QixDQUFBLEVBQXRCOztXQUdBLENBQUEsQ0FBRSxLQUFGLENBQVEsQ0FBQyxJQUFULENBQWMsWUFBZDtFQUxTOztFQU9YLFFBQUEsQ0FBQTs7RUFFQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsUUFBQSxDQUFDLENBQUQsQ0FBQTtJQUN0QixDQUFDLENBQUMsY0FBRixDQUFBO1dBRUEsUUFBQSxDQUFBO0VBSHNCLENBQXhCO0FBeEJBIiwic291cmNlc0NvbnRlbnQiOlsiIyBEZWZpbmUgaW1hZ2VzXG5xdW90ZXMgPSBbICAgICAgICBcbiAgJ1RoZXJlIGlzIG5vIG1vbnVtZW50IGRlZGljYXRlZCB0byB0aGUgbWVtb3J5IG9mIGEgY29tbWl0dGVlLicsIFxuICAnV2FudGluZyB0byBiZSBzb21lb25lIHlvdVxcJ3JlIG5vdCBpcyBhIHdhc3RlIG9mIHRoZSBwZXJzb24geW91IGFyZS4nLFxuICAnSWYgeW91IGNhbiBmaW5kIGEgcGF0aCB3aXRoIG5vIG9ic3RhY2xlcywgaXQgcHJvYmFibHkgZG9lc25cXCd0IGxlYWQgYW55d2hlcmUuJyxcbiAgJ1RoZSBncmVhdCB0aGluZyBhYm91dCBhIGNvbXB1dGVyIG5vdGVib29rIGlzIHRoYXQgbm8gbWF0dGVyIGhvdyBtdWNoIHlvdSBzdHVmZiBpbnRvIGl0LCBpdCBkb2VzblxcJ3QgZ2V0IGJpZ2dlciBvciBoZWF2aWVyLicsXG4gICdNaXN0YWtlcyBhcmUgdGhlIHBvcnRhbHMgb2YgZGlzY292ZXJ5LicsXG4gICdEZWF0aCBpcyBhIGZyaWVuZCBvZiBvdXJzOyBhbmQgaGUgdGhhdCBpcyBub3QgcmVhZHkgdG8gZW50ZXJ0YWluIGhpbSBpcyBub3QgYXQgaG9tZS4nLFxuICAnRG9uXFwndCBsZXQgeW91cnNlbGYgZm9yZ2V0IHdoYXQgaXRcXCdzIGxpa2UgdG8gYmUgc2l4dGVlbi4nXG5dXG5cbiMgQ291bnRzIHRvdGFsIGltYWdlc1xudG90YWxRdW90ZXMgPSBxdW90ZXMubGVuZ3RoXG5cbiMgR2V0IFF1b3RlXG5nZXRRdW90ZSA9IC0+XG4gICMgR2V0cyByYW5kb20gaW1hZ2UgZnJvbSBhcnJheVxuICBhY3RpdmVRdW90ZXMgPSBxdW90ZXNbTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIHRvdGFsUXVvdGVzKSldXG5cbiAgIyBDaGFuZ2VzIGJhY2tncm91bmQgb2YgZGl2XG4gICQoJ2RpdicpLnRleHQoYWN0aXZlUXVvdGVzKVxuXG5nZXRRdW90ZSgpXG5cbiQoJ2J1dHRvbicpLm9uICdjbGljaycsIChlKSAtPlxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgXG4gIGdldFF1b3RlKCkiXX0=
//# sourceURL=coffeescript
