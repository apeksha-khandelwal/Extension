console.log("attached");

//add record button
var element = document.createElement('a');
element.setAttribute('href',"#");
element.setAttribute('id',"downloadRecording");
element.setAttribute('download', "recording.txt");
element.style.display = 'none';
document.body.appendChild(element);

//initialization
var data = "{";
if(localStorage.getItem("data")!=null)
    data = localStorage.getItem("data");
else
    data = data + "\""+window.location.href+"\":{";
var count = 0;
if(localStorage.getItem("count")!=null)
    count = localStorage.getItem("count").length;

//downloading
window.onbeforeunload =function(event){
    element.click();
};
document.getElementById("downloadRecording").onclick = function() {
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    document.body.removeChild(element);
    };
/*chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
	suggest({filename: '..', conflictAction: 'overwrite'});
});
*/
//listening
document.addEventListener("focusout",function(e){
    var text = '"' +count+ '":[' +
        '"id":"' +e.target.id+ '" ,' +
        '"tagName":"' +e.target.tagName+ '" ,' +
        '"val":"' +e.target.value+ '" ,' +
        '"className":"' +e.target.className+ '" ,' +
        '"name":"' +e.target.name+ '" ]';
    count=count+1;
    localStorage.setItem("count", count);

    data = data +"\n" + text;
    localStorage.setItem("data", data);
    console.log(count);
});









/*
function readAsText(fileEntry, callback) {
      fileEntry.file(function(file) {
        var reader = new FileReader();

        reader.onerror = errorHandler;
        reader.onload = function(e) {
          callback(e.target.result);
        };
        reader.readAsText(file);
      });
    }

function writeFileEntry(writableEntry, opt_blob, callback) {
  if (!writableEntry) {
    output.textContent = 'Nothing selected.';
    return;
  }

  writableEntry.createWriter(function(writer) {

    writer.onerror = errorHandler;
    writer.onwriteend = callback;

    // If we have data, write it to the file. Otherwise, just use the file we
    // loaded.
    if (opt_blob) {
      writer.truncate(opt_blob.size);
      waitForIO(writer, function() {
        writer.seek(0);
        writer.write(opt_blob);
      });
    }
    else {
      chosenEntry.file(function(file) {
        writer.truncate(file.fileSize);
        waitForIO(writer, function() {
          writer.seek(0);
          writer.write(file);
        });
      });
    }
  }, errorHandler);
}

// for files, read the text content into the textarea
function loadFileEntry(_chosenEntry) {
  chosenEntry = _chosenEntry;
  chosenEntry.file(function(file) {
    readAsText(chosenEntry, function(result) {
      data = result;
    });
  });
}
*/

//if(textbox.tagName && textbox.tagName.toLowerCase() == "input" && textbox.type.toLowerCase() == "text")
//document.addEventListener("focusout",e=> console.log(e.target.value));


/* document.addEventListener("click",function(e){

    console.log(e.target.className);
    console.log(e.target.tagName);
    console.log(e.target.id);
    },true);
*/

/*
//method 1
Object.keys(window).forEach(key => {
    if (/^on(key|mouse)/.test(key)) {
        window.addEventListener(key.slice(2), event => {
            console.log(event);
        });
    }
});

//method 2
['click','mouseover'].forEach(function(ev) {
    el.addEventListener(ev, function() {
        console.log('event:', ev)
    })
})

//method 3
function getEventsList($obj) {
    var ev = new Array(),
        events = $obj.data('events'),
        i;
    for(i in events) { ev.push(i); }
    return ev.join(' ');
}

//method 4
$obj.on(getEventsList($obj), function(e) {
    console.log(e);
});

*/