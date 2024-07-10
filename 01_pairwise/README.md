# PICT

Pairwise Independent Combinatorial Testing tool [here](https://github.com/microsoft/pict/blob/main/doc/pict.md)  

## Install

```sh
brew info pict  
brew install pict  
```

## Generate

```sh
# cases
pict ./example1.txt /o:5

# statistics
pict ./example1.txt /o:5 /s
```

## Convert

Once converted you can use the `rainbow csv` extension to align the fields.  

```sh
mkdir -p ./out
pict ./example1.txt > ./out/example1.tsv

# convert to csv
tr '\t' ',' < ./out/example1.tsv > ./out/example1.csv
```

## Resources

* Combinatorial Test Case Generation [here](https://www.pairwise.org/)
* All-pairs testing [here](https://en.wikipedia.org/wiki/)
* PICT [here](https://github.com/microsoft/pict/tree/main)
