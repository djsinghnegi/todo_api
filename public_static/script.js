$(() => {
    let newtask = $('#newtask')
    let tasklist = $('#tasklist')
    let addtask = $('#addtask')
    function refreshList (data) {
        tasklist.empty()
        if(data.length == 0) return
        data.forEach((task) => tasklist.append(
            $('<li>')
            .text(task)
        ))
    }
    $.get('/tasks',function (data) {
        refreshList(data)
    })
    addtask.click(function () {
        $.post('/tasks',
        {task: newtask.val()},
        (data) => {
            refreshList(data)
            newtask.val('')
        })
    })
})