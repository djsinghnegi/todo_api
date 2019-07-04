$(
    ()=>{
        let newtask = $('#newtask')
        let tasklist = $('#list')
        let addtask = $('#addtask')
        function reloadList(data){
            tasklist.empty()
            if(data.length==0) return 
            data.forEach( (task) => tasklist.append( $('<li>').text(task) ) )
        }
        $.get( '/tasks', 
                function(data) { reloadList(data) } 
             )
        addtask.click( 
            function() { 
                $.post( '/tasks', 
                        {task : newtask.val() }, 
                        (data)=>{reloadList(data), newtask.val('')} 
                      )
            }
        )
    }
)