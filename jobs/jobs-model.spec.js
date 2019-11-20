const db = require("../data/dbConfig.js");

const { insert } = require("./jobs-model.js");

describe("jobs-model", function() {
  describe("insert()", function() {
    beforeEach(async () => {
      await db("jobs").truncate();
    });

    it("should insert a job", async function() {
      await insert({ title: "Developer", salary: "$30,000/yr", description: "description", user_id: "3" });

      const jobs = await db("jobs"); 
      expect(jobs).toHaveLength(1);
    });

    it("should insert the provided job", async function() {
      await insert({ title: "Web Dev", salary: "$30,000/yr", description: "description", user_id: "3" });
      await insert({ title: "UI Professional", salary: "$30,000/yr", description: "description", user_id: "3" });

      const jobs = await db("jobs");

      expect(jobs).toHaveLength(2);
      expect(jobs[0].title).toBe("Web Dev"); 
      expect(jobs[1].title).toBe("UI Professional");
    });

    // it("should return the inserted job", async function() {
    //   let job = await insert({ title: "Web Dev", salary: "$30,000/yr", description: "description", user_id: "3" });
    //   expect(job.title).toBe("Web Dev");
    // //   expect(job.id).toBeDefined();

    //   job = await insert({ title: "UI Professional" });
    //   expect(job.title).toBe("UI Professional");
    // //   expect(job.id).toBeDefined();
    // });
  });
});