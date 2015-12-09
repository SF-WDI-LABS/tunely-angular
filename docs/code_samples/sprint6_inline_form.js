
// sample html string to use for each song (one-line form)
 html = '<form class="form-inline" id="' + albumId  + '"' +
        '  <div class="form-group">' +
        '    <input type="text" class="form-control song-trackNumber" value="' + song.trackNumber + '">' +
        '  </div>'+
        '  <div class="form-group">' +
        '    <input type="text" class="form-control song-name" value="' + song.name + '">' +
        '  </div>'+
        '  <div class="form-group">' +
        '    <button class="btn btn-danger delete-song" data-song-id="' + song._id + '">x</button>' +
        '  </div>'+
        '  <div class="form-group">' +
        '    <button type="submit" class="btn btn-success save-song" data-song-id="' + song._id + '">save</span></button>' +
        '  </div>'+
        '</form>';
