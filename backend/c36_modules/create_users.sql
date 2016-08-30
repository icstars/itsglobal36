create database dollarscents;

\c dollarscents;

create table if not exists users (
    id serial primary key,
    username text,
    score int,
    health int,
    itemsCollected int
);

create role nodeuser with password '13149700' login;
grant connect on database dollarscents to nodeuser;
grant select on public.users to nodeuser;

insert into users (username, score, health, itemsCollected) values ('damien', 10000,98,11);