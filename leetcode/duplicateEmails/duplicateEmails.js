SELECT Email
FROM Person
GROUP BY Email
HAVING COUNT(email) > 1;