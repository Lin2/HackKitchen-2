const Discord = require('discord.js');

const client = new Discord.Client();
var index = 0; //0: welcome, 1: food choice, 2: eat the bread?, 3: are you sure you want bread?, 4: what did you say?
var iteration = 0;

client.once('ready',()=>{

    console.log('Bread Waiter is here.');
    
});


client.on('message', message => {
    function eatingchoice(){
        if(iteration==0){
            message.channel.send(" ",{
                files: [
                    "breaddefault.png"
                ]
            });
        }
        generalMsg.send("What would you like to eat today?");
        generalMsg.send({embed: {
            description: "Ice cream\nHotpot\nChocolate\nBread\nAsk the bread waiter how it’s doing today",
        }
        }); 
    }
    function eatingchoice2(){
        generalMsg.send("Anything else you'd like today?");
        generalMsg.send({embed: {
            description: "Ice cream\nHotpot\nChocolate\nBread\nAsk the bread waiter how it’s doing today",
        }
        });
        if(iteration==0){
            message.channel.send(" ",{
                files: [
                    "concerned.png"
                ]
            });
        }
        if(iteration==1){
            message.channel.send(" ",{
                files: [
                    "eat2.png"
                ]
            });
        }
        if(iteration==2){
            message.channel.send(" ",{
                files: [
                    "eat5.png"
                ]
            });
        }
      
    }
    
    if(message.author.bot) return;
        var generalMsg = message.guild.channels.cache.find(i => i.name === 'general');
        if((message.content=== "Hello" || message.content === "Hi" || message.content === "hi" || message.content === "hello" || message.content === "yes" || message.content === "no") && index === 0){
            generalMsg.send("Welcome to Loving Loaves, where every loaf of bread is baked with love!");
            generalMsg.send({embed: {
                description: "You smell an overwhelming scent of yeasty aroma.",
            }
            });
            setTimeout(function(){  
                message.channel.send(" ",{
                    files: [
                        "tempbread.jpg"
                    ]
                });
            }, 0);
            generalMsg.send("Hello! I'll be your waiter for today (✿◠‿◠) 🍞");
            setTimeout(eatingchoice, 500);
            index++;  

        } else if (index == 1) {
            
            switch(message.content.toLowerCase()) {
                case "bread":
                    if (iteration === 0) {
                        generalMsg.send({embed: {
                            description: "Your bread waiter gives you bread. You don’t know where it got it from.",
                        }
                        });
                        generalMsg.send({embed: {
                            description: "Eat the bread? (Yes/No)",
                        }
                        });
                        index++;
                    }
                    if (iteration === 1) {
                        generalMsg.send("Are you sure you want bread?");
                        generalMsg.send({embed: {
                            description: "Yes\nNo",
                        }
                        });
                        index = 3;
                    }
                    if (iteration === 2) {
                        generalMsg.send({embed: {
                            description: "Your bread waiter goes to the back. After a couple minutes, you notice a piece of bread in front of you. You don’t know where it came from.",
                        }
                        });
                        generalMsg.send({embed: {
                            description: "Eat the bread? (Yes/No)",
                        }
                        });
        
                        index = 2;
                    }
                    break;
                case "ask the bread waiter how it's doing today":
                    var msg = "";
                    if (iteration === 0) {
                        msg = "I’m feeling really toasty today!";
                    } else if (iteration === 1) {
                        msg = "I feel a little fuzzy inside!";
                    } else {
                        msg = "I’ve never felt lighter!";
                    }
                    generalMsg.send(msg);
                    eatingchoice();
                    break;
                default:
                    generalMsg.send("Sorry, we don’t have any of that.");
                    generalMsg.send("Why don't you pick something else?");
                    eatingchoice();
                    break;
                
            }
        } else if (index === 2) {
            if (message.content.toLowerCase() === "yes") {
                generalMsg.send({embed: {
                    description: "The bread is soft and warm. It melts in your mouth.",
                }
                });
                generalMsg.send({embed: {
                    description: "You still feel hungry.",
                }
                });
            } else if (message.content.toLowerCase() === "no") {
                generalMsg.send({embed: {
                    description: "You pocket the bread and feel hungry",
                }
                });
            }

            if (message.content.toLowerCase() === "no" || message.content.toLowerCase() === "yes") {
                if (iteration != 2) 
                    eatingchoice2();
                index = 1;
                iteration++;
            }

            if (iteration === 2) {
                generalMsg.send({embed: {
                    description: "You hear the ringing of an oven timer come from the back of the restaurant.",
                }
                });
                iteration = 0;
                index = 0;
                
            }
        } else if (index === 3) {
            if (message.content.toLowerCase() === "yes") {
                generalMsg.send({embed: {
                    description: "Your bread waiter gives you bread. You don’t know where it came from.",
                }
                });
                generalMsg.send({embed: {
                    description: "Eat the bread? (Yes/No)",
                }
                });
                index = 2;
            } else if (message.content.toLowerCase() === "no") {
                eatingchoice2();
                index = 1;
            }
        } else if (index === 4) {
            if (message.content.toLowerCase() === "bread") {
            }
        }
        
});








client.login('ODQwNjk0MjIyMTg5MzYzMjQx.YJb7gQ.Q68LgpJOAUzeAokiceB24e6XtTs') //outdated of course

