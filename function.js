function buttonClick(imgdata)
        {
            var url = 'http://54.183.134.70:5000/getAIPrediction'
            console.log('Sending Data');

    			var dat = {
    			  'person': 1,
                  'image': 1,
    			  'imgdata': imgdata
    			}
    			$.ajax({
    			  type: "POST",
    			  url: url,
    			  contentType: 'application/json',
    			  data: JSON.stringify(dat),
    			  dataType: 'json'
    			}).done(function(data) {
    			  console.log(data);
    			});
            }
          else {
			alert("File wasn't uploaded")
		  }
        }
