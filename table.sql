create table names(
	id serial not null primary key,
	first_name text not null,
	last_name text not null,
	active boolean default true
);


insert into names (first_name, last_name) values ('John', 'Smith');
insert into names (first_name, last_name) values ('Jheda', 'Smith');
insert into names (first_name, last_name) values ('Will', 'Smith');
insert into names (first_name, last_name) values ('Yandz', 'Smith');