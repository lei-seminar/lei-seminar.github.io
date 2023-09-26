# Reading Group Seminar - Large Language Models

This is a webpage to tracks and announces updates for the Reading Group presentation for the LLM reading group in CSE department at UCSD.

## To add a presentation entry:

- All the changes must be done in `main` branch of the project. Do not make any changes to the `gh-pages` branch.
- In `src/data/presentationData.js` add your entry by adding another dictionary element to the `ENTRIES` list. Your 
dictionary element must follow the below format
    ```shell
    export const ENTRIES = [
        {...},
        {...},
        {
            "Date" : <date as string>,
            "Presentation Title": <title as string>,
            "Speaker": <name as string>,
            "Affiliation": <affiliation as string>,
            "Relevant Papers": [
                [<paper title as string>, <link to the paper as string>],
                [<paper title as string>, <link to the paper as string>],
                // add as many papers as needed
            ],
            "Slides": <variable name (read next step for more information)> [or] <link to slides as a String> 
        }
    ]
    ```
- In the above template, for the Slides field, you can link any local files by adding the file to the `src/assest/` directory
and import the file as a variable to `src/data/presentationData.js`. The import must look something like this
    ```javascript
    import fileVariable from '../assets/some_file.pdf' 
    ```
    Now you can use `fileVariable` as the value for the `"Slides"` in the above template. Alternatively, you van also simply
    provide a link to google slides or any url as a string to this field.

- Now execute the following commands from the directory where the `package.json` file is present

    - Step 1: Commit the changes.
    ```shell
    git add .
    git commit -m "<commit message>"
    git push origin main
    ```
    - Step 2: Deploy the changes
  ```shell
  npm run deploy
    ```
  
- After you run the deploy command the changes should reflect on the webpage in 2-3 minutes. If not check the gh-pages pipeline.

## To add entries to reading list

- To add entries to existing sections simply add an element to the list to existing constants in `src/data/readListData.js`
  - To add a section to the reading list.
  
      - Create a new constant to the `src/data/readListData.js` file in the same format of the existing constants. 
      - Import the constant to `src/pages/readinglist.js` by adding to the import list. 
    ```javascript
      import {
        PAPER,
        REMARK,
        SCALING_LAWS,
        CHAIN_OF_THOUGHT_PROMPTING,
        RLHF,
        EMERGING_ABILITIES,
        TRANSFORMERS,
        MIXTURE_OF_EXPERTS, 
        <new constant that you created>
      } from '../data/readingListData.js'
    ```
    - Now copy this fragment of code to the with in the main `<div>` element in `src/pages/readinglist.js`
    ```javascript
        <div className="card-body">
            <h3>
                <name to diplay for the section>
            </h3>
            {getSectionTable(<imported constant variable>)}
        </div>
    ```
    - Now execute the following commands from the directory where the `package.json` file is present

        - Step 1: Commit the changes.
      ```shell
      git add .
      git commit -m "<commit message>"
      git push origin main
      ```
        - Step 2: Deploy the changes
      ```shell
      npm run deploy
        ```

    - After you run the deploy command the changes should reflect on the webpage in 2-3 minutes. If not check the gh-pages pipeline.
