using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Xunit;

namespace aoc
{
    public class jObj {
        public string name { get; set; }
    }
    public class Program
    {
        public static async Task Main(string[] args)
        {
          // https://codeburst.io/working-with-json-in-net-core-3-2fd1236126c1
          // var options = new JsonSerializerOptions
          // {
          //     WriteIndented = true,
          // };
          // var inp = File.ReadAllText("src/_json.txt");
          // var jsn = JsonSerializer.Deserialize<jObj[]>(inp);
          // var jsr = JsonSerializer.Serialize(jsn);
          // Console.WriteLine(jsr);
          // ---
          // using (FileStream fs = File.OpenRead("src/_json.txt"))
          // {
          //   var jsn = await JsonSerializer.DeserializeAsync<jObj[]>(fs);
          //   var jsr = JsonSerializer.Serialize(jsn);
          //   Console.WriteLine(jsr);
          //   File.WriteAllText(@"src/_output.txt", jsr);
          // }
          // ---
          using (StreamWriter sw = File.CreateText("src/_output.txt"))
          {
            var inp = File.ReadAllText("src/_json.txt");
            var jsn = JsonSerializer.Deserialize<jObj[]>(inp);
            var jsr = JsonSerializer.Serialize(jsn);
            await sw.WriteAsync(jsr);
          }
          // --- 
          // example model mappin to json
          // public class MyModel
          // {
          //     public string MyString { get; set; }
          //     public int MyInt { get; set; }
          //     public bool MyBoolean { get; set; }
          //     public decimal MyDecimal { get; set; }
          //     public DateTime MyDateTime1 { get; set; }
          //     public DateTime MyDateTime2 { get; set; }
          //     public List<string> MyStringList { get; set; }
          //     public Dictionary<string, Person> MyDictionary { get; set; }
          //     public MyModel MyAnotherModel { get; set; }
          // }
          // public class Person
          // {
          //     public int Id { get; set; }
          //     public string Name { get; set; }
          // }

          // is equivalent to this json

          // {
          //   "myString": "Hello World",
          //   "myInt": 123,
          //   "myBoolean": true,
          //   "myDecimal": 12.3,
          //   "myDateTime1": "2019-09-23T10:10:00",
          //   "myDateTime2": "2019-09-23",
          //   "myStringList": ["apple", "banana", "orange"],
          //   "myDictionary": {
          //     "person1": {
          //       "id": 201,
          //       "name": "C#"
          //     },
          //     "person2": {
          //       "id": 302,
          //       "name": "F#"
          //     }
          //   },
          //   "myAnotherModel": {
          //     "myString": "Hi there",
          //     "myInt": 456
          //   }
          // }
        }
        [Fact]
        public static void validate_ProblemOne()
        {
        }
    }
}
