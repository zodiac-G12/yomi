require "json"

files = p `ls ../src/cards`.split("\n")

result = files.map{|file|
  novels = p `ls ../src/cards/#{file}/files`.split("\n")

  result = novels.map{|novel|
    info = File.read("../src/cards/#{file}/files/#{novel}/#{novel}.txt").split("\n")
    novel = Hash[*["author", info[1], "novelTitle", info[0], "novelID", novel, "authorID", file]]
  }

  file = Hash[*["authorID", file, "author", result[0]["author"], "novels", result]]
}

File.write("authors.json", JSON.pretty_generate(result))
