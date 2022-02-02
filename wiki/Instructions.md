# Overview
This is a simple notes applications.  
The project is prefilled with some components and styles to save time.

The main sections are:
 - Th header.
 - The form section.
 - The notes list.

This web application is not connected to any database. Any changes you make will not be persistant. You will see the hard-coded data after every refresh.

Run the development server now via `ng serve`!

# Tasks
## 1. Data Binding
### 1.1 Where's My Name?
In the header, you will see "Welcome User" at the top. We need to make that spit out a name, dynamically!  
Visit the [Notes Service](../src/app/notes.service.ts) and you will see a variable named `name`.  

Your first task is using that variable in your [Header Component](../src/app/components/header/header.component.html) to display your name!

### 1.2 Where Are My Notes?
You will also notice that there are no notes in the list. Not good!  
Your task is to display the notes from the service!

- Visit the [Notes Service](../src/app/notes.service.ts) again to find the `notes` array. I have you provided you with some default data to begin with.
- You need to use these notes in the [Notes List Component](../src/app/components/notes-list/notes-list.component.html) to render those notes using the [Note Component](../src/app/components/note/note.component.html).
- You will need to configure the [Note Component](../src/app/components/note/note.component.html) to receive data as **input**.

*Hint: Use the [Angular Guide For Listing Items](https://angular.io/guide/built-in-directives#listing-items-with-ngfor).*