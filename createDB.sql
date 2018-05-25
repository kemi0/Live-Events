

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';


CREATE SCHEMA IF NOT EXISTS `LMF` DEFAULT CHARACTER SET utf8 ;
USE `LMF` ;

-- -----------------------------------------------------
-- Table `LMF`.`genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`genres` (
  `genre_id` INT(11) NOT NULL AUTO_INCREMENT,
  `genre_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`genre_id`),
  UNIQUE INDEX `genre_name_UNIQUE` (`genre_name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `LMF`.`zipCode`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`zipCode` (
  `zip_id` INT(11) NOT NULL AUTO_INCREMENT,
  `zip_code` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`zip_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `zipCode` ADD UNIQUE( `zip_code`);

-- -----------------------------------------------------
-- Table `LMF`.`venues`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`venues` (
  `venue_id` INT(11) NOT NULL AUTO_INCREMENT,
  `venue_name` VARCHAR(100) NOT NULL,
  `venue_address` VARCHAR(100) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `county` VARCHAR(50) NOT NULL,
  `zipcode_id` INT(11) NOT NULL,
  `longitude` VARCHAR(45) NOT NULL,
  `latitude` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`venue_id`),
  INDEX `zipcode_id_idx` (`zipcode_id` ASC),
  CONSTRAINT `zipcode_id`
    FOREIGN KEY (`zipcode_id`)
    REFERENCES `LMF`.`zipCode` (`zip_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `venues` ADD UNIQUE( `venue_name`, `longitude`, `latitude`);

-- -----------------------------------------------------
-- Table `LMF`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`events` (
  `event_id` INT(11) NOT NULL AUTO_INCREMENT,
  `event_title` VARCHAR(100) NOT NULL,
  `event_date` DATE NOT NULL,
  `event_start_time` TIME NOT NULL,
  `venue_id` INT(11) NOT NULL,
  `popularity` INT(11) NOT NULL,
  `event_details` TEXT NULL DEFAULT NULL,
  `genre_id` INT(11) NOT NULL,
  PRIMARY KEY (`event_id`),
  INDEX `venue_id_idx` (`venue_id` ASC),
  INDEX `genre_id_idx` (`genre_id` ASC),
  CONSTRAINT `genre_id`
    FOREIGN KEY (`genre_id`)
    REFERENCES `LMF`.`genres` (`genre_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `venue_id`
    FOREIGN KEY (`venue_id`)
    REFERENCES `LMF`.`venues` (`venue_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


ALTER TABLE `events` ADD UNIQUE( `event_title`);
-- -----------------------------------------------------
-- Table `LMF`.`image_size`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`image_size` (
  `size_id` INT(11) NOT NULL AUTO_INCREMENT,
  `image_size_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`size_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `image_size` ADD UNIQUE( `image_size_name`);

-- -----------------------------------------------------
-- Table `LMF`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`images` (
  `image_id` INT(11) NOT NULL AUTO_INCREMENT,
  `image_detail` VARCHAR(45) NOT NULL,
  `event_id` INT(11) NOT NULL,
  PRIMARY KEY (`image_id`),
  INDEX `event_id_idx` (`event_id` ASC),
  CONSTRAINT `event_id`
    FOREIGN KEY (`event_id`)
    REFERENCES `LMF`.`events` (`event_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `LMF`.`image_url`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`image_url` (
  `image_url_id` INT(11) NOT NULL AUTO_INCREMENT,
  `image_url` TEXT NULL DEFAULT NULL,
  `size_id` INT(11),
  `image_id` INT(11) ,
  PRIMARY KEY (`image_url_id`),
  INDEX `image_id_idx` (`image_id` ASC),
  INDEX `size_id_idx` (`size_id` ASC),
  CONSTRAINT `image_id`
    FOREIGN KEY (`image_id`)
    REFERENCES `LMF`.`images` (`image_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `size_id`
    FOREIGN KEY (`size_id`)
    REFERENCES `LMF`.`image_size` (`size_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `LMF`.`performers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`performers` (
  `performer_id` INT(11) NOT NULL AUTO_INCREMENT,
  `performer_name` VARCHAR(100) NOT NULL,
  `performer_bio` TEXT NULL DEFAULT NULL,
  `performer_image` TEXT NULL DEFAULT NULL,
  `performer_url` VARCHAR(100)  NULL,
  PRIMARY KEY (`performer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `performers` ADD UNIQUE( `performer_name`);

-- -----------------------------------------------------
-- Table `LMF`.`performers_has_events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LMF`.`performers_events` (
  `performer_id` INT(11) NOT NULL,
  `event_id` INT(11) NOT NULL,
  PRIMARY KEY (`performer_id`, `event_id`),
  INDEX `fk_performers_has_events_events1_idx` (`event_id` ASC),
  INDEX `fk_performers_has_events_performers1_idx` (`performer_id` ASC),
  
  CONSTRAINT `fk_performers_has_events_events1`
    FOREIGN KEY (`event_id`)
    REFERENCES `LMF`.`events` (`event_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    
  CONSTRAINT `fk_performers_has_events_performers1`
    FOREIGN KEY (`performer_id`)
    REFERENCES `LMF`.`performers` (`performer_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
