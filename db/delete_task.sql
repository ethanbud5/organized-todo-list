DELETE
    FROM todo_tasks
    WHERE task_id = $1;
SELECT * 
    FROM todo_tasks;