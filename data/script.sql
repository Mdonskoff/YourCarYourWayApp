CREATE TABLE `User` (
  `user_id` INT PRIMARY KEY,
  `first_name` VARCHAR(50),
  `last_name` VARCHAR(50),
  `birth_date` DATE,
  `address` VARCHAR(255),
  `email` VARCHAR(100) UNIQUE,
  `password` VARCHAR(255),
  `driver_license_number` VARCHAR(20),
  `language` ENUM(English,French)
);

CREATE TABLE `Vehicle` (
  `vehicle_id` INT PRIMARY KEY,
  `category` VARCHAR(50),
  `brand` VARCHAR(50),
  `model` VARCHAR(50),
  `registration_number` VARCHAR(20) UNIQUE,
  `is_available` BOOLEAN,
  `agency_id` INT
);

CREATE TABLE `Reservation` (
  `reservation_id` INT PRIMARY KEY,
  `user_id` INT,
  `departure_city` VARCHAR(50),
  `return_city` VARCHAR(50),
  `departure_date_time` DATETIME,
  `return_date_time` DATETIME,
  `vehicle_id` INT,
  `agency_id` INT,
  `price` DECIMAL(10,2),
  `status` ENUM(Confirmed,Cancelled,Pending),
  `reservation_date` DATETIME,
  `payment_made` BOOLEAN
);

CREATE TABLE `Agency` (
  `agency_id` INT PRIMARY KEY,
  `agency_name` VARCHAR(100),
  `agency_address` VARCHAR(255),
  `city` VARCHAR(50)
);

CREATE TABLE `Contact_Message` (
  `message_id` INT PRIMARY KEY,
  `name` VARCHAR(100),
  `email` VARCHAR(100),
  `subject` VARCHAR(100),
  `message_body` TEXT,
  `sent_date` DATETIME
);

CREATE TABLE `Assistance` (
  `session_id` INT PRIMARY KEY,
  `user_id` INT,
  `session_type` ENUM(Chat,VideoCall),
  `session_date` DATETIME,
  `duration` INT,
  `conversation_history` JSON,
  `created_at` TIMESTAMP
);

ALTER TABLE `Vehicle` ADD FOREIGN KEY (`agency_id`) REFERENCES `Agency` (`agency_id`);

ALTER TABLE `Reservation` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`);

ALTER TABLE `Reservation` ADD FOREIGN KEY (`agency_id`) REFERENCES `Agency` (`agency_id`);

ALTER TABLE `Reservation` ADD FOREIGN KEY (`vehicle_id`) REFERENCES `Vehicle` (`vehicle_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `Contact_Message` (`message_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `Assistance` (`user_id`);
