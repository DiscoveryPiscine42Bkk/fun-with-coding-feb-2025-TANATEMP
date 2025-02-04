if [ $# -eq 0 ]; then
  echo "No argument supplied"
fi
counter=0
for arg in "$@"; do
  if [ $counter -lt 3 ]; then
    echo "$arg"
    (( counter++ ))
  else
    break
  fi
done
