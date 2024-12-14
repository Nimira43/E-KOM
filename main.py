from fpdf import FPDF

class PDF(FPDF):
  def header(self):
    self.image('billy.png', 10, 8, 22)
    # (<image>,<x co-ord>, <y co-ord>, <width>)

pdf = PDF()

pdf.add_page()
pdf.set_font('helvetica', 'B', 16)
pdf.cell(40, 10, 'Testing')
pdf.output('test2.pdf')