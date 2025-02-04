if [ $# -eq 0 ]; then
  echo "No argument supplied"
fi

for i in {1..3}; do
  if [ -n "${!i}" ]; then
    echo ${!i}
  fi
done
