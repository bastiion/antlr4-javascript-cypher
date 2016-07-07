#!/bin/bash
#!/bin/bash

mv  Cypher.g4 Cypher.g4.orig
sed -e 's/\(delete\W\|delete$\|with\W\|with$\|return\W\|return$\|match\W\|match$\|set\W\|set$\|merge\W\|merge$\)/c_\1/g' Cypher.g4.orig > Cypher.g4.1
cat Cypher.g4.1 | grep -v -e '^fragment StringLiteral_' > Cypher.g4
rm Cypher.g4.1
echo "fragment StringLiteral_0 : ~[\\\\\\\\\'\"] ;" >> Cypher.g4
echo "fragment StringLiteral_1 : ~[\\\\\\\\\'\"] ;" >> Cypher.g4

