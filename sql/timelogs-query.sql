INSERT INTO `timesheet` (`time_in`, `Date`, `Time`) VALUES
('2022-05-02 03:27:16', '2022-05-02', '03:27:16'),
('2022-08-01 05:10:20', '2022-08-010', '05:10:20'),
('2022-08-03 11:44:52', '2022-08-03', '05:10:20');
COMMIT;

SELECT timelogs, Date,
       MIN(Time) as timein,
       NULLIF(MAX(Time), MIN(Time)) as timeout
FROM timelogs
GROUP BY id, Date;

CREATE TABLE `timesheet` (
  `timesheet_id` int(11) NOT NULL,
  `Date` datetime NOT NULL,
  `Time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ENGINE;



CREATE TABLE user (
fullName VARCHAR(50) NOT NULL,
username VARCHAR(255) NOT NULL,
mobile bigint(11) NOT NULL,
otp INT(10) NOT NULL,
password VARCHAR(50) NOT NULL,
verification_status INT(3) NOT NULL,
);
        $fullName =$_POST['fullName'];
        $username =$_POST['username'];
        $no =$_POST['number'];
        $password =$_POST['password'];
        $otp = rand(1111,9999);