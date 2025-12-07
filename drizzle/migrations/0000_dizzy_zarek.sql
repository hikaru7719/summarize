CREATE TABLE `contents` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`article_url` text NOT NULL,
	`article_title` text NOT NULL,
	`summary` text NOT NULL,
	`vocabulary` text NOT NULL,
	`questions` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `contents` (`user_id`);--> statement-breakpoint
CREATE INDEX `created_at_idx` ON `contents` (`created_at`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`github_id` text NOT NULL,
	`name` text,
	`email` text,
	`image` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_github_id_unique` ON `users` (`github_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);