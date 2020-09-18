const { expect } = require('chai');
const { mergeItems } = require('../merge-items');
describe("The mergeItems function", () => {
  const template = `
    <table>
      <tbody>
        <!-- Content here -->
      </tbody>
    </table>
  `;
  it("should return no <tr>s and no <td>s for no items", () => {
    const items = [];

    const result = mergeItems(template, items)

    expect(result).to.contain("<table>");
    expect(result).to.contain("</table>");
    expect(result).to.contain("<tbody>");
    expect(result).to.contain("</tbody>");
    expect(result).to.not.contain("<tr>");
    expect(result).to.not.contain("</tr>");
    expect(result).to.not.contain("<td>");
    expect(result).to.not.contain("</td>");
    expect(result).to.not.contain("<!-- Content here -->");

  });

  it("should return a single <tr>, four <td>s, and a <form> for one uncompleted item", () => {
    expect.fail('please write this test');
  });

  it("should return a single <tr>, four <td>s, and no <form> for one completed item", () => {
    expect.fail('please write this test');
  });

  it("should return three <tr>s for three items", () => {
    expect.fail('please write this test');
  });
});
