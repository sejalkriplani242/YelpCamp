var mongoose=require("mongoose"); 
var Campground=require("./models/campground");
var Comment=require("./models/comment");

var data=[
    {
        title:"Morning Adventure",
        image:"https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=350",
        description:"blah blah blah"
    },
    {
        title:"Cloud's Rest",
        image:"https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350",
        description:"blah blah blah"
    },
    {
        title:"Aura snow",
        image:"https://cdn.pixabay.com/photo/2020/05/29/19/59/mountain-5236458__340.jpg",
        description:"blah blah blah"
    }

]

function seedDB(){
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
                if(err){
                     console.log(err);
                }else{
                    console.log("Added a campground");
                    Comment.create(
                        {
        
                        text:"This place is great,but I wish there was internet",
                        author:"Homer"
                        
                    },function(err,comment){
                        if(err){
                            console.log(err);
                        }else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment");
                        }
                    });
                }
            });
        });
    });
   
}
module.exports=seedDB;