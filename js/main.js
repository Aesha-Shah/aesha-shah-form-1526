    let fn = document.getElementById("name");
    let em = document.getElementById("email");
    let msg = document.getElementById("message");
    let btn = document.getElementById("sbutton");
        
        // Form Validation  ---------------------------------------------
        function formValidator(){
            
            let feedback = {};
            let errors = [];
            
            // Name
            if (fn.value !== ""){
                feedback.name = fn.value;
            } else {
                errors.push("fn: Full name is missing");
            }
            

            // Email
            if (em.value !== ""){
                feedback.email = em.value;
            } else {
                errors.push("em: Email is missing");
            }
            
            // Message
            if (msg.value !== ""){
            	feedback.message = msg.value;
            } else {
        		errors.push("msg: Message name is missing");
        	}
            
            // Feedback / Error message
            if (errors.length ===0){
                console.log("COLLECTED DATA", feedback);
            }else{
                console.log("ERRORS", errors);
            }
        
        }
        
        // Function call on button
        btn.addEventListener("click", formValidator);
        