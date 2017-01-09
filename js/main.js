(function() {
    class LocalDB {
        constructor(dbName) {
          this.dbName = dbName;
        }

        get(name) {
          let data = JSON.parse(window.localStorage.getItem(`${this.dbName}.${name}`));
          console.log(data);
        }

        save(name, data) {
          window.localStorage.setItem(`${this.dbName}.${name}`, JSON.stringify(data));
        }
    }
    if ("localStorage" in window) {
        var DB1 = new LocalDB("DB1");

        var janek = {
            firstName: "Jan",
            lastName: "Kowalski",
            age: 32
        };

        DB1.save("janek", janek);
        DB1.get("janek");
    } else {
        alert("This browser is not supported!");
    }

})();
