#! /bin/bash

if [[ ${1} ]]
then
    if ! [ -d src/Components/$1/ ]
    then 
        mkdir src/Components/$1
        touch src/Components/$1/$1.js src/Components/$1/$1.module.css src/Components/$1/index.js
        
        echo -e "import s from './${1}.module.css';\nimport PropTypes from 'prop-types';\n" > src/Components/$1/$1.js
        echo -e "const ${1} = ({ props }) => {\n  return <p>some text</p>;\n};\n"  >> src/Components/$1/$1.js
        echo "export default ${1};" >> src/Components/$1/$1.js
        echo -e "export { default } from './${1}';" > src/Components/${1}/index.js
        echo "Component created"
        
    else 
        echo -e "Component with the same name\nalready exists in the project"
    fi
else 
    echo "Use this command sh create.sh <Component_name>"
fi