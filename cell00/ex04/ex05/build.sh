if [ $# -eq 0 ]; then
  echo "No argument supplied"
fi

for folder in "$@"; 
do
  mkdir "ex${folder}"
done
