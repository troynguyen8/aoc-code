create table Author (
	authorId integer primary key auto_increment not null,
	firstName varchar(255) not null,
    lastName  varchar(255) not null
);

create table Book (
	bookId integer primary key auto_increment not null,
    title  varchar(255) not null,
    authorId integer not null,
    isbn   varchar(30) not null,
    publisher varchar(255),
    dewey float,
    numCopies integer default 0,
    constraint uniqueISBN unique index(isbn),
    foreign key(authorId) references Author(authorId)
);