from fpdf import FPDF

class PDF(FPDF):
  def header(self):
    self.image('billy.png', 10, 8, 22)
    # (<image>,<x co-ord>, <y co-ord>, <width>)
    self.set_font('helvetica', 'B', 16)
    self.cell(80)
    self.cell(40, 10, 'NimiraTech')

pdf = PDF()

pdf.add_page()
pdf.output('test2.pdf')