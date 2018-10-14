INSERT INTO todo_tasks(name,category_id)
    VALUES ($1,$2);
SELECT * 
    FROM todo_tasks;