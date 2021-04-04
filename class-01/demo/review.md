# 102 review

```html
<!-- version 5 of html -->
<!DOCTYPE html>

<html>
    <head>
        <title>
            review
        </title>

    </head>
    <body>
        <header>
            <h1>
                review of 102
            </h1>
            <nav>
                <ul>
                    <li class="listItem">
                        <a href="#">home page</a>
                    </li>

                    <li class="listItem">home page</li>
                    
                </ul>

            </nav>
        </header>

        <main>
            <p id="paragragh "> text for the paragraph
            </p>

            <img id="image"src="" alt=""/>
        </main>

        <footer>
            copyright 2021
        </footer>

    </body>

</html>

```



css

styling our page

Inline CSS

<p style="color:red;">


Internal
```html
    <head>
        <title>
            review
        </title>
        <style>
            p{
                background-color:rgb(250,0,0);
                color:grey;

            }
        </style>

    </head>
```


external 
we create a file called style.css

we need to link the file
```html
    <head>
        <title>
            review
        </title>
      <link rel="stylesheet" href="style.css">

    </head>
```

how to write
```css
    p{
            background-color:rgb(250,0,0);
            color:grey;

        }

    #paragraph{
        color:red;
    }    

    .listItem{
        color:grey;
    }
```

id: attibute 

////////////////

Javascript:
why 
Interaction and make it more dynamic

```html
<script>

    var userName= 'samer';

</script>
```


or make a file

```html
<script src="app.js">
</script>

 
```


write about commands as well

- `pwd`
- Filepaths and up/down navigation concepts  
- `tree`  
- `ls`, `ls -la`  
- `cd`, `mkdir`  
- `touch`, `code`  
- `mv`, `rm`, `cp`