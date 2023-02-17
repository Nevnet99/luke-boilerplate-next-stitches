module.exports = (plop) => {
  plop.setGenerator("Component", {
    description: "Create a new Atom, Molecule, or Organism component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Please enter component name:",
      },
      {
        type: "list",
        name: "type",
        message: "Please choose component type:",
        choices: ["Atom", "Molecule", "Organism"],
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{lowerCase type}}s/{{pascalCase name}}/index.tsx",
        templateFile: "./.plop/index.hbs",
      },
      {
        type: "add",
        path: "src/components/{{lowerCase type}}s/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./.plop/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{lowerCase type}}s/{{pascalCase name}}/{{pascalCase name}}.styles.ts",
        templateFile: "./.plop/styles.hbs",
      },
      {
        type: "add",
        path: "src/components/{{lowerCase type}}s/{{pascalCase name}}/{{pascalCase name}}.stories.mdx",
        templateFile: "./.plop/documentation.hbs",
      },
      {
        type: "add",
        path: "src/components/{{lowerCase type}}s/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "./.plop/test.hbs",
      }
    ],
  }),
  plop.setGenerator("Type", {
    description: "Create a new Interface",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Please enter Interface name (the I is appended automatically)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/models/I{{pascalCase name}}.ts",
        templateFile: "./.plop/interface.hbs",
      },
      {
        type: 'modify',
        path: `src/models/index.ts`,
        pattern: /(\/\/ INTERFACE IMPORTS)/g,
        template: 'import { I{{pascalCase name}} } from \'./I{{pascalCase name}}\';\n$1',
      },
      {
        type: 'modify',
        path: `src/models/index.ts`,
        pattern: /(\/\/ INTERFACE EXPORTS)/g,
        template: 'I{{pascalCase name}},\n$1',
      },
    ]
  });
};
