const { expect } = require("chai");
const { mergeCategories } = require("../merge-categories");

describe("mergeCategories()", () => {
	context("Using <li> tags", () => {
		const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

		it("should return no <li>s for no categories", () => {
			//Arrange
			const categories = [];
			//Act
			const result = mergeCategories(template, categories, "li");
			//Assert
			expect(result).to.contain("<div>");
			expect(result).to.contain("</div>");
			expect(result).to.contain("<ul>");
			expect(result).to.contain("</ul>");
			expect(result).to.not.contain("<li>");
			expect(result).to.not.contain("</li>");
		});

		it("should return a single <li> for one category", () => {
			//Arrange
			const categories1 = ["str"];
			//Act
			const result = mergeCategories(template, categories1, "li");
			//Assert
			expect(result).to.contain("<div>");
			expect(result).to.contain("</div>");
			expect(result).to.contain("<ul>");
			expect(result).to.contain("</ul>");
			expect(result).to.contain("<li>str</li>");
			expect(result).to.not.contain("<!-- Content here -->");
		});

		it("should return an <li> for each category", () => {
			//Arrange
			const categories = ["first str", "second str", "third str"];
			//Act
			const result = mergeCategories(template, categories, "li");
			//Assert
			expect(result).to.contain("<div>");
			expect(result).to.contain("</div>");
			expect(result).to.contain("<ul>");
			expect(result).to.contain("</ul>");
			expect(result).to.contain("<li>first str</li>");
			expect(result).to.contain("<li>second str</li>");
			expect(result).to.contain("<li>third str</li>");
			expect(result).to.not.contain("<!-- Content here -->");
		});
	});

	context("using <option> tags", () => {
		const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

		it("should return no <option>s for no categories", () => {
			expect.fail("please write this test");
		});

		it("should return a single <option> for one category", () => {
			expect.fail("please write this test");
		});

		it("should return an <option> for each category", () => {
			expect.fail("please write this test");
		});
	});
});
